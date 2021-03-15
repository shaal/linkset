import { Linkset } from './core/linkset';
import type { LinksetInterface as NormalizedLinksetInterface } from './spec/linkset-json';
import type { LinkInterface } from './core/link';
import type { LinksetInterface, NormalizableLinksetInterface } from './core/linkset';
import { Link } from './core/link';

/**
 * Denormalizes a set of links into an instance of a Linkset.
 * {@inheritDoc Linkset.from}
 * {@see {@link NormalizedLinksetInterface}}
 */
function denormalize(normalized: NormalizedLinksetInterface): Linkset {
  const links = [];
  normalized.linkset.forEach((contextObject) => {
    const { anchor, ...rels } = contextObject;
    Object.keys(rels).forEach((rel) => {
      contextObject[rel].forEach((targetObject) => {
        links.push(new Link({ anchor, rel, ...targetObject }));
      });
    });
  });
  return new Linkset(links);
}

/**
 * Parses an application/linkset+json document into a Linkset instance.
 * {@see {@link denormalize}}
 */
function parse(json: string): Linkset {
  return denormalize(JSON.parse(json));
}

export {
  parse,
  denormalize,
}

export type {
  LinkInterface,
  LinksetInterface,
  NormalizedLinksetInterface,
  NormalizableLinksetInterface,
};
