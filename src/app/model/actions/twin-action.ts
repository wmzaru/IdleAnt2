import { Action } from "../action";
import { Price } from "../price";
import { FullUnit } from "../full-unit";
import { BuyAction } from "./buy-action";
import { Research } from "../research";

export class TwinAction extends Action {
  constructor(
    prices: Price[],
    private unit: FullUnit,
    public twinRes: Research
  ) {
    super(
      "twin",
      "Twin",
      "Hatch more " + unit.name + " for the same price",
      prices
    );
  }
  /**
   * On buy add unit retroactively
   * @param toBuy
   */
  public buy(toBuy = new Decimal(1)): boolean {
    if (super.buy(toBuy)) {
      this.unit.quantity = this.unit.quantity.plus(
        this.unit.buyAction.quantity.times(toBuy)
      );
      return true;
    } else {
      return false;
    }
  }
  public reload() {
    if (this.twinRes.done) {
      super.reload();
    } else {
      this.canBuy = false;
      // this.maxBuy = new Decimal(0);
    }
  }
}