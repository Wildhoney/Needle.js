(function main() {

    "strict mode";

    if (typeof window !== 'undefined') {
        // Instantiate the Needle.js class.
        window.needle = new Needle();
    }

    if (typeof module !== 'undefined') {
        // Instantiate the Needle.js class.
        module.exports = new Needle();
    }

}());