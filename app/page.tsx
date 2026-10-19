import ChannelStrip from "../components/landing/ChannelStrip";
import Faq from "../components/landing/Faq";
import ForMinistries from "../components/landing/ForMinistries";
import Hero from "../components/landing/Hero";
import JoinCards from "../components/landing/JoinCards";
import LibrarySphere from "../components/landing/LibrarySphere";
import ListenBento from "../components/landing/ListenBento";
import MissionStory from "../components/landing/MissionStory";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ChannelStrip />
      <LibrarySphere />
      <ListenBento />
      <MissionStory />
      <ForMinistries />
      <JoinCards />
      <Faq />
    </main>
  );
}
