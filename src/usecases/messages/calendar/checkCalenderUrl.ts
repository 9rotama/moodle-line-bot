const pattern =
  /^https:\/\/elms\.u-aizu\.ac\.jp\/calendar\/export_execute\.php\?userid=\d+&authtoken=[A-Za-z0-9]+&preset_what=courses&preset_time=weeknow$/;

export const checkCalenderUrl = (input: string) => {
  return pattern.test(input);
};
