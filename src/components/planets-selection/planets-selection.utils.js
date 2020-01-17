export const renderCardClassName = (planet, planetActive, planetsSelected) => {
  let className = 'planet-card';

  if (planetActive && planetActive.name === planet.name) {
    className += ' planet-card--active';
  }

  if (
    planetsSelected &&
    planetsSelected.find(planetSelected => planetSelected.name === planet.name)
  ) {
    className += ' planet-card--selected';
  }

  return className;
};

export const renderImgClassName = (planet, planetsSelected) => {
  let className = 'card__img';

  if (
    planetsSelected &&
    planetsSelected.find(planetSelected => planetSelected.name === planet.name)
  ) {
    className += ' card__img--selected';
  }

  return className;
};
