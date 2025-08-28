import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TrusteeInfo } from '../constants/trustees';

interface TrusteeCardProps {
  trustee: TrusteeInfo;
}

export function TrusteeCard({ trustee }: TrusteeCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg text-emerald-700">
          {trustee.name} {trustee.credentials}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {trustee.position}
        </p>
      </CardContent>
    </Card>
  );
}