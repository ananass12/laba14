function captureImage() {
        const element = document.getElementById('main');
        html2canvas(element, {
            useCORS: true,
            scale: 2
        }).then((canvas) => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'screenshot.png';
            link.click();
        });
    }
