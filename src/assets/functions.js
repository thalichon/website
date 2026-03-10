const functions = {
    rastrigin: {
        f: (x, y) => {
            return 20 + (x ** 2 - 10 * Math.cos(2 * Math.PI * x)) + (y ** 2 - 10 * Math.cos(2 * Math.PI * y));
        },
        xDomain: [-5.12, 5.12],
        yDomain: [-5.12, 5.12],
        logscale: false
    },
    ackley: {
        f: (x, y) => {
            return -20*Math.exp(-0.2 * Math.sqrt(0.5 * (x ** 2 + y ** 2)));
        },
        xDomain: [-5, 5],
        yDomain: [-5, 5],
        logscale: false
    },
    sphere: {
        f: (x, y) => {
            return x ** 2 + y ** 2;
        },
        xDomain: [-2, 2],
        yDomain: [-2, 2],
        logscale: false
    },
    
    rosenbrock: {
        f: (x, y) => {
            return 100 * (y - x ** 2) ** 2 + (1 - x) ** 2;
        },
        xDomain: [-2, 2],
        yDomain: [-1, 3],
        logscale: true
    },
    
    beale: {
        f: (x, y) => {
            return (1.5 - x + x * y) ** 2 + (2.25 - x + x * y ** 2) ** 2 + (2.625 - x + x * y ** 3) ** 2;
        },
        xDomain: [-4.5, 4.5],
        yDomain: [-4.5, 4.5],
        logscale: true
    },
    goldsteinPrice: {
        f: (x, y) => {
            return (1 + (x + y + 1) ** 2 * (19 - 14 * x + 3 * x ** 2 - 14 * y + 6 * x * y + 3 * y ** 2)) * (30 + (2 * x - 3 * y) ** 2 * (18 - 32 * x + 12 * x ** 2 + 48 * y - 36 * x * y + 27 * y ** 2));
        },
        xDomain: [-2, 2],
        yDomain: [-3, 1],
        logscale: true
    },
    booth: {
        f: (x, y) => {
            return (x + 2 * y - 7) ** 2 + (2 * x + y - 5) ** 2;
        },
        xDomain: [-10, 10],
        yDomain: [-10, 10],
        logscale: true
    },
    bukinN6: {
        f: (x, y) => {
            return 100 * Math.sqrt(Math.abs(y - 0.01 * x ** 2)) + 0.01 * Math.abs(x + 10);
        },
        xDomain: [-15, -5],
        yDomain: [-4, 6],
        logscale: false
    },
    matyas: {
        f: (x, y) => {
            return 0.26 * (x ** 2 + y ** 2) - 0.48 * x * y;
        },
        xDomain: [-10, 10],
        yDomain: [-10, 10],
        logscale: true
    },
    leviN13: {
        f: (x, y) => {
            return Math.sin(3 * Math.PI * x) ** 2 + (x - 1) ** 2 * (1 + Math.sin(3 * Math.PI * y) ** 2) + (y - 1) ** 2 * (1 + Math.sin(2 * Math.PI * y) ** 2);
        },
        xDomain: [-5, 7],
        yDomain: [-5, 7],
        logscale: false
    },
    griewank: {
        f: (x, y) => {
            return (x ** 2 + y ** 2) / 4000 - Math.cos(x) * Math.cos(y / Math.sqrt(2)) + 1;
        },
        xDomain: [-10, 10],
        yDomain: [-10, 10],
        logscale: false
    },
    himmelblau: {
        f: (x, y) => {
            return (x ** 2 + y - 11) ** 2 + (x + y ** 2 - 7) ** 2;
        },
        xDomain: [-5, 5],
        yDomain: [-5, 5],
        logscale: true
    },
    treeHumpCamel: {
        f: (x, y) => {
            return 2 * x ** 2 - 1.05 * x ** 4 + (x ** 6) / 6 + x * y + y ** 2;
        },
        xDomain: [-5, 5],
        yDomain: [-5, 5],
        logscale: true
    },
    easom: {
        f: (x, y) => {
            return -Math.cos(x) * Math.cos(y) * Math.exp(-((x - Math.PI) ** 2 + (y - Math.PI) ** 2));
        },
        xDomain: [-100, 100],
        yDomain: [-100, 100],
        logscale: false
    },
    crossInTray: {
        f: (x, y) => {
            return -0.0001 * (Math.abs(Math.sin(x) * Math.sin(y) * Math.exp(Math.abs(100 - Math.sqrt(x ** 2 + y ** 2) / Math.PI))) + 1) ** 0.1;
        },
        xDomain: [-10, 10],
        yDomain: [-10, 10],
        logscale: false
    },
    eggHolder: {
        f: (x, y) => {
            return -(y + 47) * Math.sin(Math.sqrt(Math.abs(x / 2 + (y + 47)))) - x * Math.sin(Math.sqrt(Math.abs(x - (y + 47))));
        },
        xDomain: [-512, 512],
        yDomain: [-512, 512],
        logscale: false
    },
    holderTable: {
        f: (x, y) => {
            return -Math.abs(Math.sin(x) * Math.cos(y) * Math.exp(Math.abs(1 - Math.sqrt(x ** 2 + y ** 2) / Math.PI)));
        },
        xDomain: [-10, 10],
        yDomain: [-10, 10],
        logscale: false
    },
    mcCormick: {
        f: (x, y) => {
            return Math.sin(x + y) + (x - y) ** 2 - 1.5 * x + 2.5 * y + 1;
        },
        xDomain: [-1.5, 4],
        yDomain: [-3, 4],
        logscale: false
    },
    schafferN2: {
        f: (x, y) => {
            return 0.5 + (Math.sin(x ** 2 - y ** 2) ** 2 - 0.5) / (1 + 0.001 * (x ** 2 + y ** 2)) ** 2;
        },
        xDomain: [-100, 100],
        yDomain: [-100, 100],
        logscale: false
    },
    schafferN4: {
        f: (x, y) => {
            return 0.5 + (Math.cos(Math.sin(Math.abs(x ** 2 - y ** 2))) ** 2 - 0.5) / (1 + 0.001 * (x ** 2 + y ** 2)) ** 2;
        },
        xDomain: [-100, 100],
        yDomain: [-100, 100],
        logscale: false
    },
    styblinskiTang: {
        f: (x, y) => {
            return (x ** 4 - 16 * x ** 2 + 5 * x + y ** 4 - 16 * y ** 2 + 5 * y) / 2;
        },
        xDomain: [-5, 5],
        yDomain: [-5, 5],
        logscale: false
    }
};

export default functions;