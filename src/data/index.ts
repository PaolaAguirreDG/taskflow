import type { Task } from '../types'

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Comprar pollo',
    description: 'Ir a la granja a comprar 2 kg de pechuga de pollo',
    time: 'month',
    done: false
  },
  {
    id: '2',
    title: 'Estudiar React Native',
    description: 'Repasar componentes, props y estados durante 2 horas',
    time: 'today',
    done: true
  },
  {
    id: '3',
    title: 'Pagar la factura de internet',
    description: 'Realizar el pago antes de la fecha de vencimiento',
    time: 'tomorrow',
    done: false
  },
  {
    id: '4',
    title: 'Hacer ejercicio',
    description: 'Caminar 45 minutos en el parque',
    time: 'week',
    done: false
  },
]

export const name = 'Paola Aguirre'
