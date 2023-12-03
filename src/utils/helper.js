import status from "../data/status";

export const printPage = () => {
  window.print();
};

export const colorCategory = (value) => {
  switch (value) {
    case `${status.Missing}`:
      return "warning";
    case `${status.MissingUrgent}`:
      return "error";
    case `${status.MissingProduct}`:
      return "error";
    case `${status.Approved}`:
      return "success";
    case `${status.QuantityPriceUpdated}`:
      return "success";
    case `${status.QuantityUpdated}`:
      return "success";

    default:
      return "inherit";
  }
};
