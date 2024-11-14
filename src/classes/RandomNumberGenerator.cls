/**
 * Created by vissewo on 12/11/2024.
 */

public class RandomNumberGenerator {

    public class RandomNumberInput {
        @InvocableVariable(required=true)
        public Integer min;

        @InvocableVariable(required=true)
        public Integer max;
    }

    public class RandomNumberOutput {
        @InvocableVariable
        public Integer randomNumber;

        public RandomNumberOutput(Integer randomNumber) {
            this.randomNumber = randomNumber;
        }
    }

    @InvocableMethod(label='Generate Random Number' description='Generates a random integer between min and max, inclusive')
    public static List<RandomNumberOutput> generateRandomNumber(List<RandomNumberInput> requests) {
        List<RandomNumberOutput> results = new List<RandomNumberOutput>();

        for (RandomNumberInput request : requests) {
            Integer min = request.min;
            Integer max = request.max;

            if (min > max) {
                throw new IllegalArgumentException('Min value must be less than or equal to Max value');
            }

            Integer randomNumber = (Integer) Math.floor(Math.random() * (max - min + 1)) + min;
            results.add(new RandomNumberOutput(randomNumber));
        }

        return results;
    }
}
