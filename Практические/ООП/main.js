class Point {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    distance(point) {
        let dx = this.x - point.x;
        let dy = this.y - point.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z || 0;
    }

    distance(point) {
        let dx = this.x - point.x;
        let dy = this.y - point.y;
        let dz = this.z - point.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}