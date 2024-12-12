import colors from "./colors";

const defaultStyles = {
  container: {
    flex: 1,
    margin: 16,
  },
  h2: {
    fontSize: 24,
    textAlign: "left",
    color: colors.yellow,
  },
  topSection: {
    height: 100,
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 16,
    textAlign: "left",
  },
  button: {
    backgroundColor: colors.blue,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: colors.CleanBG,
    textAlign: "center",
    fontWeight: "medium",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.DarkBG,
    textAlign: "center",
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 16,
    color: colors.DarkBG,
    textAlign: "center",
    marginVertical: 8,
  },
};

export default defaultStyles;
