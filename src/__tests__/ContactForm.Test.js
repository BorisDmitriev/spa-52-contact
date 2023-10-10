import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import ContactForm from "../components/ContactForm";

describe("ContactForm", () => {
    beforeEach(() => {
        window.alert = jest.fn();
    });

    afterEach(() => {
        window.alert.mockClear();
    });

    test("updates the name state when the name input changes", () => {
        render(<ContactForm />);

        const nameInput = screen.getByLabelText(/name/i);

        fireEvent.change(nameInput, { target: { value: "John Doe" } });

        expect(nameInput.value).toBe("John Doe");
    });

    test("updates the email state when the email input changes", () => {
        render(<ContactForm />);

        const emailInput = screen.getByLabelText(/email/i);

        fireEvent.change(emailInput, {
            target: { value: "john.doe@example.com" },
        });

        expect(emailInput.value).toBe("john.doe@example.com");
    });

    test("updates the message state when the message input changes", () => {
        render(<ContactForm />);

        const messageInput = screen.getByLabelText(/message/i);

        fireEvent.change(messageInput, {
            target: { value: "This is a test message." },
        });

        expect(messageInput.value).toBe("This is a test message.");
    });

    test("submitting the form shows the correct alert message", async () => {
        render(<ContactForm />);

        const nameInput = screen.getByLabelText(/name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const messageInput = screen.getByLabelText(/message/i);
        const submitButton = screen.getByRole("button", { name: /submit/i });

        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(emailInput, {
            target: { value: "john.doe@example.com" },
        });
        fireEvent.change(messageInput, {
            target: { value: "This is a test message." },
        });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith(
                "Name: John Doe\nEmail: john.doe@example.com\nMessage: This is a test message."
            );
        });
    });

    test("submitting the form resets all input fields", async () => {
        render(<ContactForm />);

        const nameInput = screen.getByLabelText(/name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const messageInput = screen.getByLabelText(/message/i);
        const submitButton = screen.getByRole("button", { name: /submit/i });

        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(emailInput, {
            target: { value: "john.doe@example.com" },
        });
        fireEvent.change(messageInput, {
            target: { value: "This is a test message." },
        });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(window.alert).toHaveBeenCalled();
            expect(nameInput.value).toBe("");
            expect(emailInput.value).toBe("");
            expect(messageInput.value).toBe("");
        });
    });
});
