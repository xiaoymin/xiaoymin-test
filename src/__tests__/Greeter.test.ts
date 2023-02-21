import { Greeter, SayHello } from '../index';

test('My Greeter', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
});


test('My Greeter1', () => {
    expect(Greeter('Carl1')).toBe('Hello Carl1');
});



test('My Greeter2', () => {
    expect(SayHello('123')).toContain('123');
});