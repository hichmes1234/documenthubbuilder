import 'dotenv/config';
import Anthropic from '@anthropic-ai/sdk';

const apiKey = process.env.ANTHROPIC_API_KEY;

if (!apiKey) {
  console.error('ANTHROPIC_API_KEY is missing. Add it to your environment or a .env file.');
  process.exit(1);
}

const client = new Anthropic({ apiKey });
const prompt = process.argv.slice(2).join(' ') || 'Bonjour ! Peux-tu me proposer une courte introduction pour un projet documentaire ?';

try {
  const response = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = response.content
    .filter((item) => item.type === 'text')
    .map((item) => item.text)
    .join('\n');

  console.log(text || 'No response returned by Claude.');
} catch (error) {
  console.error('Error while calling Claude:', error.message || error);
  process.exit(1);
}
