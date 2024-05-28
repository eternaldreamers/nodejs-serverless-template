import { SQSEvent } from 'aws-lambda';

export const handler = async (event: SQSEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'Message sent to SQS' })
  };
};