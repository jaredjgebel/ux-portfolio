function createHeading(headingLevel, headingText, hasTopPadding, classes) {
    const generatePadding = function (headingLevel, hasTopPadding) {
        const paddingMap = {
            "1": "sm:pt-7 xl:pt-9",
            "2": "sm:pt-6 xl:pt-7",
            "3": "sm:pt-6 xl:pt-7",
            "4": "sm:pt-5 xl:pt-6",
        }

        return hasTopPadding ? paddingMap[headingLevel] : '';
    }

    const additionalClasses = classes ? classes.join(' ') : '';
    return `<h${headingLevel} class="sm-heading-${headingLevel} xl:xl-heading-${headingLevel} ${generatePadding(headingLevel, hasTopPadding)} ${additionalClasses}">${headingText}</h${headingLevel}>`;
}

module.exports = createHeading;