
const HOST = 'belkbodylab.com';
const KEY = '1271e537a94f4f4495bd9081e9a50707';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Get URLs from command line arguments, or default to home page
const urls = process.argv.slice(2);
const urlList = urls.length > 0 ? urls : [`https://${HOST}/`];

async function submitToIndexNow() {
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
      urlList.forEach(url => console.log(`   - ${url}`));
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
