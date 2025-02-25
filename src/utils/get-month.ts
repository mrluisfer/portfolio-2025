import { monthNames } from '../constants/months';

export const getMonthById = (id: number) => monthNames.find((month) => month.id === id)?.name ?? '';

export const getMonthByName = (name: string) => monthNames.find((month) => month.name === name)?.id;
