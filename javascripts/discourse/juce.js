const shouldDisplayBoard = (user) => {
  return Boolean(user) && user.groups.some(({name}) => name === "juce-admins");
}

export { shouldDisplayBoard };
