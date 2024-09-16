import Additionals from "../additionals";

const Portfolio = () => (
  <Additionals
    title="Portfolio"
    get="/personportfolio/getallpersonportfoliosite"
    del="/personportfolio/deletepersonportfolio"
    edit="portfolio/edit"
  />
);

export default Portfolio;
