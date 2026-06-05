import COAHeader from './components/COAHeader';
import COAHero from './components/COAHero';
import COAWhatIs from './components/COAWhatIs';
import COAMethods from './components/COAMethods';
import COABatchVerification from './components/COABatchVerification';
import COAHowToRead from './components/COAHowToRead';
import COATrustStandards from './components/COATrustStandards';
import COAFAQ from './components/COAFAQ';
import COAFinalCTA from './components/COAFinalCTA';
import COAFooter from './components/COAFooter';

export default function COALandingPage() {
  return (
    <main id="top" className="bg-[#F7F9FB] min-h-screen text-[#1A2433]">
      <COAHeader />
      <COAHero />
      <COAWhatIs />
      <COAMethods />
      <COABatchVerification />
      <COAHowToRead />
      <COATrustStandards />
      <COAFAQ />
      <COAFinalCTA />
      <COAFooter />
    </main>
  );
}
