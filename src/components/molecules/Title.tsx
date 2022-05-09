import { CSSProperties } from "react";


const styles: Record<string, CSSProperties> = {
    title: {
        marginBottom: 0,
        paddingBottom: 0,
    },
    subtitle: {
      marginTop: 5,
      paddingTop: 0,
        color: "gray",
        marginBottom: 20
    }
};

const Title = () => (
    <>
      <h1 style={styles.title}>
        The Self Improvement Project
      </h1>
      <p style={styles.subtitle}>
        It might be exactly what you need to hear today
      </p>
    </>
  );

export default Title;
