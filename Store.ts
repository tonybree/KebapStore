namespace KepabStore {

    window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.rect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();
        crc2.stroke();

    }
}