const generateSchedule = (obj) => {
  const {
    startDate,
    endDate,
    duration,
    startTime: timeStart,
    endTime: timeEnd,
    bufferTime,
  } = obj;
  const schedule = {
    ...obj,
    bufferTime: Number(bufferTime),
    slots: {},
  };

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const dailySlots = [];
    const startTime = new Date(date);
    startTime.setHours(timeStart.split(':')[0], timeStart.split(':')[1]);

    const endTime = new Date(date);
    endTime.setHours(timeEnd.split(':')[0], timeEnd.split(':')[1]);

    const totalDuration = duration * 60000;
    let currentStartTime = new Date(startTime);

    while (currentStartTime.getTime() + totalDuration <= endTime.getTime()) {
      const slotEndTime = new Date(currentStartTime.getTime() + totalDuration);

      dailySlots.push({
        available: true,
        startTime: currentStartTime.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        endTime: slotEndTime.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      });

      const nextStartTime = new Date(
        slotEndTime.getTime() + bufferTime * 60000
      );
      currentStartTime = nextStartTime;
    }
    schedule.slots[date] = dailySlots;
  }

  return schedule;
};

export default generateSchedule;
