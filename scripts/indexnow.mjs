const HOST = 'www.belkbodylab.com';
const KEY = '1271e537a94f4f4495bd9081e9a50707';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

async function fetchSitemapUrls() {
  console.log(`🔍 Fetching sitemap from ${SITEMAP_URL}...`);
  try {
    const response = await fetch(SITEMAP_URL);
    if (!response.ok) throw new Error(`Could not fetch sitemap: ${response.statusText}`);
    
    const xml = await response.text();
    // Simple regex to extract URLs from <loc> tags
    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
    
    return urls;
  } catch (error) {
    console.error('❌ Error fetching sitemap:', error.message);
    return [];
  }
}

async function submitToIndexNow() {
  // Get URLs from command line arguments, or fetch from sitemap
  let urlList = process.argv.slice(2);
  
  if (urlList.length === 0) {
    urlList = await fetchSitemapUrls();
  }

  if (urlList.length === 0) {
    console.log('⚠️ No URLs found to submit.');
    return;
  }

  console.log(`🚀 Submitting ${urlList.length} URL(s) to IndexNow...`);
  
  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: urlList,
      }),
    });

    if (response.ok) {
      console.log('✅ Successfully submitted to IndexNow!');
      // Only show the first 5 to keep terminal clean, or all if short
      if (urlList.length <= 10) {
        urlList.forEach(url => console.log(`   - ${url}`));
      } else {
        urlList.slice(0, 5).forEach(url => console.log(`   - ${url}`));
        console.log(`   ... and ${urlList.length - 5} more.`);
      }
    } else {
      const errorData = await response.text();
      console.error(`❌ Failed to submit. Status: ${response.status}`);
      console.error(`   Error: ${errorData}`);
    }
  } catch (error) {
    console.error('❌ An error occurred during submission:', error.message);
  }
}

submitToIndexNow();
