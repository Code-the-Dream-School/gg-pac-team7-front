import React from "react";
import ContentContainer from "../components/ContentContainer";
import BaseLink from "../components/BaseLink";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Alert from "../components/Alert";

function Documentation() {
  return (
    <ContentContainer heading="Components Documentation">
      {/* ContentContainer Component Documentation */}
      <section className="mb-8">
        <div className="border p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">ContentContainer</h2>
          <p className="mb-4">
            This element is implemented using the{" "}
            <code className="font-bold text-sm">ContentContainer</code>{" "}
            component. It is used to wrap content with consistent padding,
            max-width, and an optional heading.
          </p>

          <div className="bg-gray-900 text-white p-4 rounded-lg max-w-full overflow-x-auto mt-4">
            <pre className="text-sm leading-relaxed">
              <code>{`import ContentContainer from "../components/ContentContainer";

function ContactUs() {
  return (
    <ContentContainer heading="Contact Us">
      <p className="mb-4">
        Text...
      </p>
    </ContentContainer>
  );
}

export default ContactUs;
`}</code>
            </pre>
          </div>
          <h3 className="text-xl font-bold mt-4 mb-2">Props:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <code className="text-sm font-bold">heading</code>: Optional. The
              heading text to be displayed at the top of the container.
            </li>
            <li>
              <code className="text-sm font-bold">className</code>: Optional.
              Additional classes to customize the container's styles.
            </li>
            <li>
              <code className="text-sm font-bold">children</code>: Required. The
              content to be wrapped inside the container.
            </li>
          </ul>
        </div>
      </section>

      {/* Button Component Documentation */}
      <section className="mb-8">
        <div className="border p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Button</h2>
          <p className="mb-4">
            This element is implemented using the{" "}
            <code className="text-sm font-bold">Button</code> component. It can
            be used to create buttons with consistent styling across the
            application.
          </p>
          <Button className="mb-4">Sample Button</Button>
          <div className="bg-gray-900 text-white p-4 rounded-lg max-w-full overflow-x-auto">
            <pre className="text-sm leading-relaxed">
              <code>{`import Button from "../components/Button"; 

<Button>Sample Button</Button>`}</code>
            </pre>
          </div>
          <h3 className="text-xl font-bold mt-4 mb-2">Props:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <code className="text-sm font-bold">type</code>: Optional.
              Specifies the type of the button (e.g., "submit", "reset",
              "button").
            </li>
            <li>
              <code className="text-sm font-bold">children</code>: Required. The
              content to be displayed inside the button.
            </li>
            <li>
              <code className="text-sm font-bold">className</code>: Optional. A
              string of additional CSS classes to apply.
            </li>
            <li>
              <code className="text-sm font-bold">...props</code>: Optional. Any
              other valid attributes or event handlers.
            </li>
          </ul>
        </div>
      </section>

      {/* BaseLink Component Documentation */}
      <section className="mb-8">
        <div className="border p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Link</h2>
          <p className="mb-4">
            This element is implemented using the{" "}
            <code className="text-sm font-bold">BaseLink</code> component. It
            creates consistent links throughout the application.
          </p>
          <div className="mb-4">
            <BaseLink to="/">Sample Link</BaseLink>
          </div>
          <div className="bg-gray-900 text-white p-4 rounded-lg max-w-full overflow-x-auto">
            <pre className="text-sm leading-relaxed">
              <code>{`import BaseLink from "../components/BaseLink";

<BaseLink to="/">Sample Link</BaseLink>`}</code>
            </pre>
          </div>
          <h3 className="text-xl font-bold mt-4 mb-2">Props:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <code className="text-sm font-bold">to</code>: Required. The
              destination URL for the link.
            </li>
            <li>
              <code className="text-sm font-bold">children</code>: Required. The
              content to be displayed inside the link.
            </li>
            <li>
              <code className="text-sm font-bold">className</code>: Optional. A
              string of additional CSS classes to apply.
            </li>
          </ul>
        </div>
      </section>

      {/* InputField Component Documentation */}
      <section className="mb-8">
        <div className="border p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Input</h2>
          <p className="mb-4">
            This element is implemented using the{" "}
            <code className="text-sm font-bold">InputField</code> component.
            Note: This component is specifically designed for input fields where
            the <code className="font-bold text-sm">type</code> attribute is
            used for textual data entry (e.g., "text", "email", "password"). It
            is not suitable for input types such as{" "}
            <code className="font-bold text-sm">"button"</code>,{" "}
            <code className="font-bold text-sm">"checkbox"</code>, etc.
          </p>
          <InputField
            label="Email"
            id="email"
            type="email"
            placeholder="Placeholder"
            className="mb-4"
          />
          <div className="bg-gray-900 text-white p-4 rounded-lg max-w-full overflow-x-auto">
            <pre className="text-sm leading-relaxed">
              <code>{`import InputField from "../components/InputField";
              
<InputField label="Email" id="email" type="email" placeholder="Placeholder" />`}</code>
            </pre>
          </div>
          <h3 className="text-xl font-bold mt-4 mb-2">Props:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <code className="text-sm font-bold">label</code>: Required. The
              label text for the input field.
            </li>
            <li>
              <code className="text-sm font-bold">id</code>: Required. The id
              attribute for the input element.
            </li>
            <li>
              <code className="text-sm font-bold">type</code>: Optional. The
              type of the input (e.g., "text", "email", "password").
            </li>
            <li>
              <code className="text-sm font-bold">placeholder</code>: Optional.
              The placeholder text for the input field.
            </li>
            <li>
              <code className="text-sm font-bold">hint</code>: Optional. A hint
              text displayed below the input field.
            </li>
            <li>
              <code className="text-sm font-bold">className</code>: Optional. A
              string of additional CSS classes to apply.
            </li>
          </ul>
        </div>
      </section>

      {/* Alert Component Documentation */}
      <section className="mb-8">
        <div className="border p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Alert</h2>
          <p className="mb-4">
            This element is implemented using the{" "}
            <code className="text-sm font-bold">Alert</code> component. It
            displays alerts with support for an optional{" "}
            <code className="text-sm font-bold">error</code> type. If no type is
            specified, the alert defaults to{" "}
            <code className="text-sm font-bold">success</code>.
          </p>
          <Alert title="Success">Sample success message</Alert>
          <Alert type="error" title="Error">
            Sample error message
          </Alert>
          <div className="bg-gray-900 text-white p-4 rounded-lg max-w-full overflow-x-auto">
            <pre className="text-sm leading-relaxed">
              <code>{`import Alert from "../components/Alert";
              
<Alert title="Success">Sample success message</Alert>`}</code>
            </pre>
            <pre className="text-sm leading-relaxed">
              <code>{`<Alert type="error" title="Error">Sample error message</Alert>`}</code>
            </pre>
          </div>
          <h3 className="text-xl font-bold mt-4 mb-2">Props:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <code className="text-sm font-bold">type</code>: Optional.
              Specifies the type of alert. If set to{" "}
              <code className="text-sm font-bold">error</code>, the alert will
              be styled accordingly. If omitted, the alert defaults to{" "}
              <code className="text-sm font-bold">success</code>.
            </li>
            <li>
              <code className="text-sm font-bold">title</code>: Optional. The
              title of the alert.
            </li>
            <li>
              <code className="text-sm font-bold">children</code>: Optional. The
              content to be displayed inside the alert.
            </li>
          </ul>
        </div>
      </section>
    </ContentContainer>
  );
}

export default Documentation;
