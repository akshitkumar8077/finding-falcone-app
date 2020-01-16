export const isPlanetSelected = (planetCard, planetsSelected) => {
  const isPlanetExist =
    planetsSelected &&
    planetsSelected.find(
      planetSelected => planetSelected.name === planetCard.name
    );

  return isPlanetExist ? 'planet-card--selected' : '';
};

export const isPlanetActive = (planetCard, planetActive) => {
  return planetActive && planetCard.name === planetActive.name
    ? 'planet-card--active'
    : '';
};
