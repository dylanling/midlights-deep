import {GenericUnit} from '../../../sim/unit/fieldunit';

it('works??????', () => {
  const unit = GenericUnit.builder()
    .name('asdf')
    .build(GenericUnit);
  expect(unit.name()).toEqual('asdf');
});