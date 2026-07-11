import data from '../Data/Data.json';
import PageLayout from '../Layout/PageLayout';
import { Meeting } from '../components/Meeting';
import { Seo } from '../components/Seo';

export default function MeetingPage() {
  return <PageLayout><Seo title="Book a Consultation" description="Book a consultation with Wired Creations to discuss your next digital project." path="/meeting" /><Meeting data={data.meeting} /></PageLayout>;
}
