export interface ITask {
  todo: string
  desc?: string
  time?: string
  isDone: boolean
}

export interface IAlert {
  message: string
  level: "danger" | "warning" | "info"
}

export interface ICageCondition {
  temp: {
    ideal: number
    min?: number
    max?: number
  }
  humidity: {
    ideal: number
    min?: number
    max?: number
  }
}

export interface ISchedule {
  cageCondition: ICageCondition
  tasks?: ITask[]
  alerts?: IAlert[]
}
