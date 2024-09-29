import { useContent } from '@qwik.dev/city';
import { component$ } from '@qwik.dev/core';

export const IntegrationsList = component$(() => {
  const { menu } = useContent();

  const integrations = menu?.items?.find((item) => item.text === 'Integrations')?.items;

  return (
    <ul>
      {integrations?.map((integration) => {
        return (
          <li key={integration.text}>
            <a href={integration.href}>{integration.text}</a>
          </li>
        );
      })}
    </ul>
  );
});
