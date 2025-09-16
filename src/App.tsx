import { CustomIntlProvider } from "@/i18n/components/custom-intl-provider/custom-intl-provider";
import { Routes } from "@/routes";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary
      fallback={<div>Error</div>}
      onError={(error) => {
        alert(error.message);
      }}
    >
      <CustomIntlProvider>
        <Routes />
      </CustomIntlProvider>
    </ErrorBoundary>
  );
}

export default App;
