import App from './App'
import {render, screen} from "@testing-library/react"

describe("App file tests", () => {
    it('Should render component', () => {
        render(<App />)
        expect(true).toBeTruthy()
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument();
    });
})