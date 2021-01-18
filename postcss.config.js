const themePath = './wp-content/themes/zander';
module.exports = {
    purge: {
        layers: ['utilities'],
        content: [
            themePath
        ],
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    }
}