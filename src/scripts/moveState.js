export default class MoveState {
  
    static get LEFT() { return 1; }
    static set LEFT(v) { throw "Exception : constant LEFT cannot be modified"; }
    static get RIGHT() { return 2; }
    static set RIGHT(v) { throw "Exception : constant RIGHT cannot be modified"; }
    static get UP() { return 3; }
    static set UP(v) { throw "Exception : constant UP cannot be modified"; }
    static get DOWN() { return 4; }
    static set DOWN(v) { throw "Exception : constant DOWN cannot be modified"; }
    static get NONE() { return 5; }
    static set NONE(v) { throw "Exception : constant NONE cannot be modified"; }

}
