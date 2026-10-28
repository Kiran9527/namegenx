import GeneratorPage from "./GeneratorPage";
import { getGeneratorById } from "../data/catalog";

const GamingGenerator = () => (
  <GeneratorPage generator={getGeneratorById("gaming")} />
);

export default GamingGenerator;
