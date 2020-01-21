export const renderVehicleCardClassName = (
  vehicle,
  vehiclesSelected,
  planetActive
) => {
  let className = 'vehicle-card ';

  if (vehicle.max_distance < planetActive.distance) {
    className += 'vehicle-card--unavailable ';
  }

  if (
    vehiclesSelected.find(
      vehicleSelected =>
        vehicleSelected.name === vehicle.name &&
        vehicleSelected.destination === planetActive.name
    )
  ) {
    className += 'vehicle-card--selected ';
  }

  if (
    vehicle.remain_no === 0 &&
    !vehiclesSelected.find(
      vehicleSelected =>
        vehicleSelected.name === vehicle.name &&
        vehicleSelected.destination === planetActive.name
    )
  ) {
    className += 'vehicle-card--unavailable ';
  }

  return className;
};

export const renderVehicleImgClassName = (
  vehicle,
  vehiclesSelected,
  planetActive
) => {
  let className = 'vehicle-card__img ';

  if (
    vehiclesSelected &&
    vehiclesSelected.find(
      vehicleSelected =>
        vehicleSelected.name === vehicle.name &&
        vehicleSelected.destination === planetActive.name
    )
  ) {
    className += 'vehicle-card__img--selected ';
  }

  return className;
};

export const calculTimeTaken = (planetsSelected, vehiclesSelected) => {
  const distance = planetsSelected.map(item => item.distance);
  const speed = vehiclesSelected.map(item => item.speed);

  const totalTimeTaken = distance.reduce(
    (acc, val, i) => acc + val / speed[i],
    0
  );
  return totalTimeTaken;
};
