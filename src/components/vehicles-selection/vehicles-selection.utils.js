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
    vehiclesSelected &&
    vehiclesSelected.find(
      vehicleSelected =>
        vehicle.remain_no === 0 &&
        vehicleSelected.destination === vehicle.destination &&
        vehicleSelected.destination !== planetActive.name
    )
  ) {
    className += 'vehicle-card--unavailable ';
  }

  if (
    vehiclesSelected &&
    vehiclesSelected.find(
      vehicleSelected =>
        vehicleSelected.name === vehicle.name &&
        vehicleSelected.destination === planetActive.name
    )
  ) {
    className += 'vehicle-card--selected ';
  }

  return className;
};

export const renderVehicleImgClassName = (
  vehicle,
  vehiclesSelected,
  planetActive
) => {
  let className = 'vehicle-logo ';

  if (
    vehiclesSelected &&
    vehiclesSelected.find(
      vehicleSelected =>
        vehicleSelected.name === vehicle.name &&
        vehicleSelected.destination === planetActive.name
    )
  ) {
    className += 'vehicle-logo--selected ';
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
