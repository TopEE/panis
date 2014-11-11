package dk.topee.test;

import org.junit.Ignore;
import org.junit.Rule;
import org.junit.rules.TestName;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
@Ignore
public abstract class BaseTest {

    /**
     * Remember the test name for logging purpose
     */
    @Rule
    public TestName method = new TestName();

}
