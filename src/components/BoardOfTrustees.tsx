import React from 'react';
import { trustees } from '../constants/trustees';
import { TrusteeCard } from './TrusteeCard';

export function BoardOfTrustees() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-emerald-700">Board of Trustees of Green Prosopon</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Distinguished scholars and religious leaders guiding our mission to cultivate theological 
            and philosophical knowledge through quality educational resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustees.map((trustee, index) => (
            <TrusteeCard key={index} trustee={trustee} />
          ))}
        </div>
      </div>
    </section>
  );
}