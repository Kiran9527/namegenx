import GeneratorPage from "./GeneratorPage";
import { getGeneratorById } from "../data/catalog";

const InstagramGenerator = () => (
  <GeneratorPage generator={getGeneratorById("instagram")} />
);

export default InstagramGenerator;
