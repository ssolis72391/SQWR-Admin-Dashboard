import { BarController } from 'chart.js';

class Custom extends BarController {
  draw() {
    const ctx = this.chart.ctx;
    const meta = this.getMeta();
    for (let j = 0; j < meta.data.length; j++) {
      const vm = meta.data[j];

      let left, right, top, bottom, signX, signY, borderSkipped;
      let borderWidth = vm.options.borderWidth;

      // If radius is less than 0 or is large enough to cause drawing errors a max
      // radius is imposed. If cornerRadius is not defined set it to 0.
      let cornerRadius = 10;

      if (!vm.horizontal) {
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top ? 1 : -1;
        borderSkipped = vm.borderSkipped.bottom ? 'bottom' : 'top';
      } else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left ? 1 : -1;
        signY = 1;
        borderSkipped = vm.borderSkipped.left ? 'left' : 'right';
      }

      // Canvas doesn't allow us to stroke inside the width so we can
      // adjust the sizes to fit if we're setting a stroke on the line
      if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        const barSize = Math.min(
          Math.abs(left - right),
          Math.abs(top - bottom)
        );
        borderWidth = borderWidth > barSize ? barSize : borderWidth;
        const halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        const borderLeft =
          left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
        const borderRight =
          right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
        const borderTop =
          top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
        const borderBottom =
          bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
          top = borderTop;
          bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
          left = borderLeft;
          right = borderRight;
        }
      }

      ctx.beginPath();
      ctx.fillStyle = vm.options.backgroundColor;
      ctx.strokeStyle = vm.options.borderColor;
      ctx.lineWidth = borderWidth;

      // Corner points, from bottom-left to bottom-right clockwise
      // | 1 2 |
      // | 0 3 |
      const corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom],
      ];

      // Find first (starting) corner with fallback to 'bottom'
      const borders = ['bottom', 'left', 'top', 'right'];
      let startCorner = borders.indexOf(borderSkipped, 0);
      if (startCorner === -1) {
        startCorner = 0;
      }

      function cornerAt(index) {
        return corners[(startCorner + index) % 4];
      }

      // Draw rectangle from 'startCorner'
      let corner = cornerAt(0);
      ctx.moveTo(corner[0], corner[1]);

      for (let i = 0; i < 4; i++) {
        corner = cornerAt(i);
        let nextCornerId = i + 1;
        if (nextCornerId == 4) {
          nextCornerId = 0;
        }
        let nextCorner = cornerAt(nextCornerId);

        const width = corners[2][0] - corners[1][0];
        const height = corners[0][1] - corners[1][1];
        const x = corners[1][0];
        const y = corners[1][1];

        let radius = cornerRadius;

        // Fix radius being too large
        if (radius > Math.abs(height) / 1.5) {
          radius = Math.floor(Math.abs(height) / 1.5);
        }
        if (radius > Math.abs(width) / 1.5) {
          radius = Math.floor(Math.abs(width) / 1.5);
        }

        var rounded = (this.$context.datasetIndex + 1) % 2 === 0;

        if (height < 0) {
          // Negative values in a standard bar chart
          const x_tl = x;
          const x_tr = x + width;
          const y_tl = y + height;
          const y_tr = y + height;

          const x_bl = x;
          const x_br = x + width;
          const y_bl = y;
          const y_br = y;
        } else {
          if (rounded) {
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height + 10);
            ctx.quadraticCurveTo(
              x + width,
              y + height + 10 + radius,
              x + width - radius,
              y + height + 10 + radius
            );
            ctx.lineTo(x + radius, y + height + 10 + radius);
            ctx.quadraticCurveTo(
              x,
              y + height + 10 + radius,
              x,
              y + height + 10
            );
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
          } else {
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - 10);
            ctx.quadraticCurveTo(
              x + width,
              y + height - 10 + radius,
              x + width - radius,
              y + height - 10 + radius
            );
            ctx.lineTo(x + radius, y + height - 10 + radius);
            ctx.quadraticCurveTo(
              x,
              y + height - 10 + radius,
              x,
              y + height - 10
            );
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
          }
        }
      }

      ctx.fill();
      if (borderWidth) {
        ctx.stroke();
      }
    }
  }
}

Custom.id = 'roundedBars';
Custom.defaults = BarController.defaults;

// Stores the controller so that the chart initialization routine can look it up
export default Custom;
