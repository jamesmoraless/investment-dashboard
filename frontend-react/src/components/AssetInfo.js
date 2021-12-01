import CompanyFinancials from "./CompanyFinancials";
import HistoricalPrices from "./HistoricalPrices";

const AssetInfo = ({ asset }) => {
  return (
    <>
      <section className="section is-flex is-justify-content-space-evenly is-flex-wrap-wrap is-flex-shrink-1 has-background-light">
        {asset.type === "Stock" && <CompanyFinancials asset={asset} />}
        <HistoricalPrices asset={asset} />
      </section>
    </>
  );
};

export default AssetInfo;
