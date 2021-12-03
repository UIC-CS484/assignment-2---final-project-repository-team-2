export const Time = {
    getNowSeconds: () => Math.round(new Date().getTime() / 1000),
    getRemainingHours: (futureSeconds) => Math.round((futureSeconds - Time.getNowSeconds()) / 60 / 60),
    getRemainingMinutes: (futureSeconds) => Math.round((futureSeconds - Time.getNowSeconds()) / 60),
    getRemainingSeconds: (futureSeconds) => Math.round((futureSeconds - Time.getNowSeconds())),
    stillInAdventure: (futureSeconds) => Math.round((futureSeconds - Time.getNowSeconds())) > 0
}