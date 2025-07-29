import { useState } from 'react';
import { services } from '../data/services';
import type { Service } from '../data/services';

export const useServices = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return {
    services,
    selectedService,
    handleOpenModal,
    handleCloseModal,
  };
};
