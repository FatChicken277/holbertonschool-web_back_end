export default class Building {
  constructor(sqft) {
    if (Object.getPrototypeOf(this) !== Building.prototype && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
