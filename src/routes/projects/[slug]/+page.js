import { error } from '@sveltejs/kit';
import { PROJECTS } from '#lib/projects.js';

export function load({ params }) {
  if (!Object.hasOwn(PROJECTS, params.slug)) error(404, 'Not found');
  return { slug: params.slug };
}
