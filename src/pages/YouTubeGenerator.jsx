import GeneratorPage from "./GeneratorPage";
import { getGeneratorById } from "../data/catalog";

const YouTubeGenerator = () => (
  <GeneratorPage generator={getGeneratorById("youtube")} />
);

export default YouTubeGenerator;
