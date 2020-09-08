document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('.custom-section');
    root.innerHTML = '<constructor :price="price" ' +
        ':tiers-structures="tiersStructures" ' +
        ':tastes="tastes" ' +
        ':fillings="fillings" ' +
        ':selected-properties="selectedProperties" ' +
        ':forms="forms" ' +
        ':covers="covers"' +
        ':toppings="toppings"' +
        ':berries="berries" ' +
        ':berrie-price="berriePrice" ' +
        ':decors="decors"' +
        ':decorPrice="decorPrice" ' +
        ':active-selectors="activeSelectors"' +
        '@select-property="selectProperty"' +
        '@activate-selector="activateSelector"' +
        '@add-features="addFeatures"' +
        '@save-and-buy="saveAndBuy"></constructor>'

});