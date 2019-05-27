/* Couter Clockwise calculation */ 

class point2D {
    constructor(x, y) {
        this.x = x 
        this.y = y
    }
    
    ccw(a, b, c) {
        var area = (b.x-a.x) * (c.y - a.y) - (b.y - a.y)*(c.x - a.x)
        if(area < 0) return -1  // Clockwise
        else if(area > 0) return 1 // Counter Clockwise
        else return 0   // Collinear
    }
}





