var CanvasDraw = function (el) {
    this.el = document.getElementById(el);
    if (this.el && this.el.getContext) {
    } else {
        //测试手动创建一个节点
        this.el = document.createElement("canvas");
        var txt_node = document.createTextNode("This is a create node!");
        this.el.appendChild(txt_node);
        var id="canvas_node_"+Math.random().toString().substring(2);
        this.el.setAttribute("id",id);
        // todo 使用style属性复制宽高出现容器内部的x值度缩半了
        // this.el.style.width="200px";
        // this.el.style.height="200px";
        this.el.width=200;
        this.el.height=200;
        // document.body.appendChild(this.el);
        document.getElementById("new-draw").appendChild(this.el);
    }
    this.context = this.el.getContext("2d");
};
/**
 * 绘制填充的矩形
 * @param color
 * @param x
 * @param y
 * @param width
 * @param height
 * @returns {CanvasDraw}
 */
CanvasDraw.prototype.fillRect = function (color, x, y, width, height) {
    this.context.fillStyle = color;
    console.dir(this);
    console.log(x, y, width, height);
    this.context.fillRect(x, y, width, height);
    return this;
};
/**
 * 绘制秒表的矩形
 * @param color
 * @param x
 * @param y
 * @param width
 * @param height
 * @returns {CanvasDraw}
 */
CanvasDraw.prototype.strokeRect = function (color, x, y, width, height) {
    this.context.strokeStyle = color;
    this.context.strokeRect(x, y, width, height);
    return this;
};
/**
 * 清除一个矩形区域
 * @param x
 * @param y
 * @param width
 * @param height
 * @returns {CanvasDraw}
 */
CanvasDraw.prototype.clearRect = function (x, y, width, height) {
    this.context.clearRect(x, y, width, height);
    return this;
};

